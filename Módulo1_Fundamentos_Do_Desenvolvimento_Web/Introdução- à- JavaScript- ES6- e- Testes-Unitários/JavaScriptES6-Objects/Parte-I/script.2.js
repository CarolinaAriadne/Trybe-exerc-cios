const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
    payment: {
     total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
};

customerInfo(order);

const orderModifier = (order) => {
  const alterandoNome = order.name = "Luiz Silva";
  const tiposDePizzas = Object.keys(order.order.pizza)
  const coca = order.order.drinks.coke.type;
  const valor = order.payment.total = '50';

  console.log(
    `Olá ${alterandoNome} o total do seu pedido de ${tiposDePizzas[0]}, ${tiposDePizzas[1]} e ${coca} é de ${valor}`
  );
};

orderModifier(order);

//   "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
