const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);

  
  
  const customerInfo = (order) => {
    const address = 'address'; // guardando propriedade e valores do objeto adress
    const deliveryPerson = order.order.delivery.deliveryPerson; // pegando caminho de cima pra baixo para chegar na ANa - order primeiro objeto, order segundo objeto, delivery objeto dentro do segundo objeto, deliveryPerson que é uma chave do delivery, que contém o valor Ana
    const customerName = order['name'];  // guardando valor de name, que é Rafael, do primeiro obj order
    const customerPhone = order['phoneNumber']; // guardando valor da chave phoneNumber
    const street = order[address].street; // pegando valor de adress do obj order,  que são todas as informações , e especificando  que quero o valor que contém na chave street
    const number = order[address].number; // pegando valor de adress do obj order,  que são todas as informações , e especificando  que quero o valor que contém na chave number
    const apartment = order[address].apartment; // pegando valor de adress do obj order,  que são todas as informações , e especificando  que quero o valor que contém na chave apartament
  
   
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`); // concatenando os valores passados para as variáveis

    // deliveryPerson = Ana Slveira; customerName =  Rafael Andrade; customerPhone = 11-98763-1416; street = Rua das Flores; number = 389; apartament = 701
}

customerInfo(order);

//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

