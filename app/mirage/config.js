export default function() {
  
  const auctions = [
    { id: 1, price: 19, title: "T-shirt"},
    { id: 2, price: 226, title: "iPhone 5"},
    { id: 3, price: 170, title: "Pony toy"},
    { id: 4, price: 5, title: "Methylene blue"}
  ];
  
  setInterval(() => {
		auctions.forEach(a => {
      Ember.set(a, 'price', (a.price * 1.01).toFixed(2));
    })
  }, 3000);

  this.get('/auctions', function() {
    return { data: auctions.map(attrs => (
      {type: 'auctions', id: attrs.id, attributes: attrs }
    ))
    }
  });
  
  this.get('/auctions/:id', function(db, request) {
    const auction = auctions.find((e) => e.id == request.params.id);
    return {
      data: {
        type: 'auctions',
        id: auction.id,
        attributes: auction
      }
    }
  });

}
