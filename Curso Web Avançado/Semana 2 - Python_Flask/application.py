from flask import Flask, render_template, request

app = Flask(__name__) #name contem o nome do arquivo atual, esta dizendo que e um servidor web

@app.route("/") #o @ no python é aplicar uma função a outra
def index():
    return render_template('index.html')

@app.route("/segunda")
def segunda():
    return render_template('index2.html')

@app.route("/terceira")
def terceira():
    return render_template('index3.html')

@app.route("/formulario")
def formulario():
    return render_template('formulario.html')

@app.route("/enviarformulario", methods=['GET', 'POST'])
def envia_formulario():
    if request.method == 'POST':
        return render_template('formulario_resultado.html', name=request.form.get('nome_pessoa'))

if __name__ == '__main__':
    app.run(debug=True) # permite debugar, atualizar código no navegador a medida que edita