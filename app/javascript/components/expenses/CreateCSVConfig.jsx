import Modal from "../shared/Modal"

const CreateCSVConfig = (onClose, onSubmit) => {

    return (
        <Modal title="Create new CSV configuration" onClose={this.props.onClose}>
            <form onSubmit={this.props.onSubmit}>
                This is a form
            </form>
        </Modal>
    );
}

export default CreateCSVConfig;