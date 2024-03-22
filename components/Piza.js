import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Exemplo: function Name({ props })
// (parâmetro) ({prop})
export function Piza({ name, namePizza, price }) {
  return (
    <View style={styles.container}> 
     <ScrollView>
        <Text style={[styles.name, styles.bold]}>{name}</Text>
        <Text style={[styles.name, styles.namePizza]}>{namePizza}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ccc',
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  namePizza: {
    color: '#1C1C1C',
  },

  price: {
    fontSize: 13,
    color: '#0000ff',
  },
})