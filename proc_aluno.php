<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $idade = $_POST['idade'];
    $curso = $_POST['curso'];
    $email = $_POST['email'];

    // Conexão com o banco de dados (substitua pelas suas informações)
    $servername = "localhost";
    $username = "root";
    $password = "123456";
    $dbname = "escola";

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se a conexão foi estabelecida corretamente
    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Prepara e executa a query SQL para inserir os dados na tabela de alunos
    $sql = "INSERT INTO alunos (nome, idade, curso, email) VALUES ('$nome', '$idade', '$curso', '$email')";
    if ($conn->query($sql) === TRUE) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro ao cadastrar aluno: " . $conn->error;
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
} else {
    // Se o método de requisição não for POST, redireciona para a página de cadastro
    header("Location: cadastro_aluno.php");
    exit();
}
?>
