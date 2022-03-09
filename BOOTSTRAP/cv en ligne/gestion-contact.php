<html>
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php

    $_sexe = htmlspecialchars( $_POST['titre']);
    $_nom = htmlspecialchars($_POST['nom']);
    $_mail = htmlspecialchars( $_POST['mail']);
    $_message = htmlspecialchars($_POST['demande']);

    // préparation Message 
    $_msg = " NOM : " . $_sexe . " ". $_nom . "<br> Vous a envoyé le message : ".$_message;

    // entete du mail
    $entete = "From: $_mail\n";
    $entete .= "MIME-version: 1.0\n";
    $entete .= "Content-type: text/html; charset= utf-8\n";

    //on test les champs si non vide
    if($_nom !="" || $_message !="" || $_mail!="" || $_sexe !=""){
    //si le mail est envoyé
    if(mail('didier@rolland-dev.fr', 'test envoi', $_msg, $entete)){
    echo '
  
            <script>
                alert("Message Envoyé!");
                location.href="contact.html"; 
                windows.close();
            </script>
    ';
    }
    //si il y a une erreur lors de l'envoi
    else{
    echo 'Erreur, email non envoyé.';
    } 
    }
    exit;
    ?>

</body>
</html>