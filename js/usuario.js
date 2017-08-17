<?
$LOGIN = "user123";
$PASSWORD = "pass123";
 
if (isset($_POST['submit'])) {
if($_POST['username'] == $LOGIN && $_POST['password'] == $PASSWORD )
{
session_start();
$_SESSION['logedin'] = 'passsid';
}
}
if(isset($_SESSION['logedin']) && $_SESSION['logedin'] == 'passsid')
{
?>