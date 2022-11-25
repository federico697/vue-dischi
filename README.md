## come creare un proggetto con vue cli + repo abbinata di github
- creare una prima repo vuota su github
- clonarla sul pc con vs code
- aprire il terminale dentro la cartella
- vue create .
- npm run serve


## se vogliamo bootstrap
- lancio il comando: npm install bootstrap@5.2.3 
- all' interno del file "main.js" scrivo i due codici:
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    ## se vogliamo utilizzare AXIOS
    - npm install axios
    - all'interno del file .vue dove vogliamo utilizzare axios, inseriamo l'import:
        import axios from 'axios'
        - utilizzo poi axios all'interno del componente dove l'ho importatoall'  interno di mounted()
          created() , se vogliamo fare un caricamento delle api al caricamento 