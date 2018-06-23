<!DOCTYPE HTML>

<html>
<head>
<title>Algolia Search - S. Dietz - API</title>


</head>
<body>


<?php

// composer autoload
require __DIR__ . '/vendor/autoload.php';

// if you are not using composer
// require_once 'path/to/algoliasearch.php';

$client = new \AlgoliaSearch\Client('BWRBP6D960', 'bef8c280f8477fae408fde6c7ff97324');

$index = $client->initIndex('test_PreSales_SDietz');




$records = json_decode(file_get_contents('actors.json'), true);

$index->addObjects($records);

?>

</body>
</html>

