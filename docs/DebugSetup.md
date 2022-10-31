## Debug setup

### VSCode : Backend Debugging

> :warning: ruby-debug-ide gem must be installed

Start the Rails server using rdebug-ide

```
    rdebug-ide --host 0.0.0.0 --port 1234 --dispatcher-port 1234 -- bin/bundle exec bin/rails server -b 0.0.0.0
```

To start the debugging process and attach on VSCode: 
> VSCode > Run and Debug > Add configuration

Add these lines to attach to rdebug.

```     
        {
            "name": "Listen for rdebug-ide",
            "type": "Ruby",
            "request": "attach",
            "remoteHost": "127.0.0.1",
            "remotePort": "1234",
            "remoteWorkspaceRoot": "/ontrack"
        }
```