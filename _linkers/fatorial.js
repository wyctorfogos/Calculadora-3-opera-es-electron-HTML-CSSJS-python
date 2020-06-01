function fatorial() {
    var {PythonShell} = require("python-shell")
    var path = require("path")

    var termo = document.getElementById("termo").value
    document.getElementById("termo").value = ""

    var opcoes = {
        scriptPath : path.join(__dirname, '../_engine/'),
        args : [termo]
    }

    var Fatorial = new PythonShell('fatorial.py', opcoes);

    Fatorial.on('message', function(message) {
        swal(message);
    })
}
