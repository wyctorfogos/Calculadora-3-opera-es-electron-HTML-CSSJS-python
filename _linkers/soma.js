function soma(){
    var {PythonShell} = require('python-shell')
    var path = require('path')

    var number_1 = document.getElementById("number_1").value
    var number_2 = document.getElementById("number_2").value

    document.getElementById("number_1").value = ""
    document.getElementById("number_2").value = ""

    var opcoes = {
        scriptPath: path.join(__dirname, '../_engine/'),
        args: [number_1, number_2]
    }

    var imc = new PythonShell('soma.py', opcoes)

    imc.on("message", function(message){
        swal(message)
    })
}