export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        },
        {
          id: 'p4',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        },
        {
          id: 'p5',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        },
        {
          id: 'p6',
          image:
            '../../public/iphone-compare-iphone-15-pro-202309.jpeg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        },
        {
          id: 'p7',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        }
      ]
    };
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};
