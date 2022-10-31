module Api; module V1
  class RevenuesController < BaseController
    def index

      revenues = ::Revenue.all
      revenues = revenues.where('paid_at >= ?', Time.at(params[:paid_after].to_i).to_datetime) if params[:paid_after].present?
      revenues = revenues.where('paid_at <= ?', Time.at(params[:paid_before].to_i).to_datetime) if params[:paid_before].present?
      revenues = revenues.where("lower(description) LIKE ?", "%#{params[:search].strip}%") if params[:search]&.strip.present?
      revenues = revenues.where(category_id: ::Category.where(budget_id: cookies.signed[:selectedBudget]).ids)
      revenues = revenues.where(category_id: params[:category_id]) if params[:category_id].present?
      revenues = revenues.includes(:category) if params[:include_category] == true.to_s
      revenues = revenues.paginate(params[:page], params[:per_page]) if params[:page]
      revenues = revenues.order(normalized_sort(params[:sort], params[:sort_desc])).order(id: :desc) if params[:sort]
            
      if params[:page]
        opts = {}
        opts = { include: :category } if params[:include_category] == true.to_s
        paginate(revenues, opts)
      else
        render json: revenues
      end
    end
        
    def create
      revenue = Revenue.new(description: params[:description], category_id: params[:category_id], amount: params[:amount], paid_at: params[:paid_at])
      successful = revenue.save
      render json: revenue, status: successful ? 200 : 500
    end

    def bulk_create
      Revenue.transaction do
        params[:revenues].each_with_index do |revenue, idx|
          Revenue.create!(amount: revenue['amount'], category_id: revenue['category_id'], description: revenue['description'], paid_at: revenue['paid_at'])
        end
      end
    end

    def destroy
      revenue = Revenue.find(params[:id])
      successful = revenue.destroy
      render json: nil, status: successful ? 200 : 500
    end

    def update
      revenue = Revenue.find(params[:id])
      successful = revenue.update(
        category_id: params.fetch(:category_id, revenue.category_id),
        description: params.fetch(:description, revenue.description),
        paid_at: params.fetch(:paid_at, revenue.paid_at),
        amount: params.fetch(:amount, revenue.amount),
      )
      render json: nil, status: successful ? 200 : 500
    end

    private

    def normalized_sort(key, sort_desc)
      cols = { paid_at: "paid_at", amount: "amount" }
      col = cols[key.to_sym] || "paid_at"
      dir = sort_desc == "true" ? "DESC" : "ASC"
      "#{col} #{dir}"
    end
  end
end; end
