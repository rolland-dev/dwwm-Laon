function afficher()
            {
                var sai_nom = document.getElementById("nom").value;
                var sai_prenom = document.getElementById("prenom").value;
                var sai_nationalite = document.getElementById("nationalite").value;
                var sai_pop = document.getElementById("pop").checked;
                var sai_rock = document.getElementById("rock").checked;
                var sai_classique = document.getElementById("classique").checked;
                var sai_hard = document.getElementById("hard").checked;
                var sai_divers = document.getElementById("text2").value;

                if(sai_pop === true){
                    sai_pop = ("Vous aimez la " + "Pop");
                }
                else
                {
                    sai_pop="";
                }
                
                if(sai_rock === true){
                    sai_rock = (" ,vous aimez la " + "Rock");
                }
                else
                {
                    sai_rock="";
                }
                
                if(sai_classique === true){
                    sai_classique = (" ,vous aimez la " + "Classique");
                }
                else
                {
                    sai_classique="";
                }
                
                if(sai_hard === true){
                    sai_hard = (" ,vous aimez la " + "Hard");
                }
                else
                {
                    sai_hard="";
                }

                alert("Bonjour " + sai_prenom +" "+ sai_nom + " !!!" + "\n" + "De  nationalitée " + sai_nationalite + "\n" +
                          sai_pop + sai_rock  + sai_classique + sai_hard + "\n" + sai_divers);

                
                document.getElementById("pop").checked=false;
                sai_pop=document.getElementById("pop").value;
                document.getElementById("rock").checked=false;
                sai_rock=document.getElementById("rock").checked;
                document.getElementById("classique").checked=false;
                sai_classique=document.getElementById("classique").checked;
                document.getElementById("hard").checked=false;
                sai_hard=document.getElementById("hard").checked;
                
            }