var search = instantsearch({
  // Replace with your own values
  appId: 'BWRBP6D960',
  apiKey: '2eb566f94a4c3fb256dcd55dcee8668c', // search only API key, no ADMIN key
  indexName: 'test_PreSalesAssignment_Sdietz',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
	hitsPerPage:20,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.start();

