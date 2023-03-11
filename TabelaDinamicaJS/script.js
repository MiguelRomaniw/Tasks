    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    
    
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
    
    
    let options1 = ['teste1', 'teste2', 'teste3', 'teste4']
    
    let cabecalho = ['Sr', 'nome', 'companhia', 'sexo', 'cidade']
    let linha = [1, 'miguel', 'minha companhia', 'masculino', 'reserva do iguaçu']

    
    var linhaL = document.createElement('tr');
    thead.appendChild(linhaL);
    var linhaL2 = document.createElement('tr')
    tbody.appendChild(linhaL2)
    
    for (i = 0; i < cabecalho.length; i++){
        let cabeca = document.createElement('th');
        let lin = document.createElement('td')
        let select = document.createElement('select')
        let opt = document.createElement('option')
            cabeca.innerHTML = `${cabecalho[i]}`
            linhaL.appendChild(cabeca)
            lin.innerHTML = `${linha[i]}`
            linhaL2.appendChild(lin) 
    }

    let teste = [
        ['batata', 'cebola', 'arroz','cove',],
        ['alicate', 'abacate', 'martelo', 'marcos'],
        ['casa', 'cadeira', 'sabão', 'papel higienico'],
        ['perfume', 'brincoo', 'oleo', 'chaleira']
    ]






