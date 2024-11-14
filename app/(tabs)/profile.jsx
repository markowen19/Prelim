import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    // Here you can clear any user session or token if applicable
    router.push('/'); // Navigate back to the login page
  };

  const handleEditProfile = () => {
    // Navigate to the edit profile page
    router.push('/edit-profile');
  };

  return (
    <View style={styles.container}>
      {/* Circular Logo Container */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3qTktkCKLJFzoHGzENOma-qykqRUAkgE3w&s' }}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.text}>Mark Owen Lapiña</Text>


      <Button 
        title="Logout" 
        onPress={handleLogout} 
        color="#e63946" 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
