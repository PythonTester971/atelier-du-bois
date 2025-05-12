<?php include 'partials/header.php'; ?>
<main id="contact-page">
    <h2>Contactez-nous</h2>
    <form action="#" method="post" id="contact-form">
        <label for="name">Votre nom</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Votre adresse email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Votre message</label>

        <textarea id="message" name="message" required></textarea>

        <button type="submit">Envoyer</button>
    </form>
</main>
<?php include 'partials/footer.php'; ?>