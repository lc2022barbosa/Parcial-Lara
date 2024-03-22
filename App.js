
import { SafeAreaView, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { Piza } from './components/Piza'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={styles.colorBaack}>
        <Text style={styles.title}>PIZZA-HOUSE</Text>
        <Text style={styles.subtitle}>Sabores Disponiveis:</Text>
        <Piza 
          name={'Calabresa'} 
          namePizza={'carne suína,tempero da casa,massa da casa'} 
          price={50}
        />

        <Piza  
          name={'Portuguesa'} 
          namePizza={'calabresa,frango,queijo,massa da casa'} 
          price={45} 
        />

        <Piza  
          name={'Frango'}
          namePizza={'frango,molho de tomate,queijo, massa da casa'}
          price={35}
        />
       <Piza  
          name={'Camarão'}
          namePizza={'frango,molho de tomate,queijo, massa da casa'}
          price={40}
        />
        <Piza  
          name={'moda da casa'}
          namePizza={'frango,molho de tomate,queijo, massa da casa'}
          price={60}
        />
       </ScrollView>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#FF8C00',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 15,
    color: '#EE9A00',
    textAlign: 'center',
  },
  colorBaack: {
    backgroundColor: '#000',
    marginHorizontal: 0,

  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
})