
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>Table de multiplication</title>
        <style>
            table thead tr th { background:#FFFF66; /*jaune*/ } /* thead : 1ere ligne */
            table thead tr th:first-child { background:#ccc; /*gris*/ } /* thead : 1ere ligne, 1ere colonne */
            table tbody tr td { background:#fff; } /* tbody : cellules courantes */
            table tbody tr td:first-child { background:#FFFF66;/*jaune*/ } /* tbody : 1ere colonne */
            table {margin:auto;} /* tbody : colonne et ligne identique */
            td { text-align:center; vertical-align:center;}
            td:hover {background-color:red; color:yellow;}
            td:hover table::after{content:"survole";}
            
        </style>
    </head>

    <body>

        <table border="1" width="400">

            <?php
                $NbrCol 	= 9; // nombre de colonnes
                $NbrLigne 	= 9; // nombre de lignes
                
                // on affiche en plus sur les 1ere ligne et 1ere colonne
                // les valeurs a multiplier (dans des cases en couleur)
                // le tableau final fera donc 10 x 10
                // --------------------------------------------------------
                // 1ere ligne (ligne 0)
            ?>
            <thead>
                <tr>
                    <th>i X j</th>
                    
                    <?php
                        for ($j=1; $j<=$NbrCol; $j++) // index de colonne
                        { 
                    ?>
                            <th width="40" height="40"><?php echo $j; ?></th>
                            
                    <?php
                        } 
                    ?>
                </tr>
            </thead>

            <tbody>
                <?php
                    // lignes suivantes
                    for ($i=1; $i<=$NbrLigne; $i++) // index de ligne
                    { 
                ?>
                <tr>
                    <?php
                            for ($j=1; $j<=$NbrCol; $j++) // index de colonne
                            {
                                // 1ere colonne (colonne 0)
                                if ($j==1) 
                            { 
                    ?>
                            <td height="40" width="40"><?php echo $i; ?></td>
                    <?php
                            }
                                // colonnes suivantes
                    ?>
                            <td><?php if ($i==$j)  ; ?> 
                    <?php
                                // -------------------------
                                // DONNEES A AFFICHER dans la cellule
                                echo $i*$j; // ici : table de multiplication
                                // -------------------------
                    ?>
                            </td>
                    <?php
                            } 
                    ?>
                    </tr>
                <?php
                        $j = 1; // on ré-initialise le numéro de colonne
                    }
                ?>
            </tbody>
        </table>

        <?php
            // alert(document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].cells[4].innerHTML);
        ?>
        
        <form method="post">
            <p>
                <!-- <textarea name="ameliorer" id="ameliorer"></textarea> -->
            </p>
</form>
    </body>
</html>