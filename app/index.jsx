import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-screen px-4">
        <Image
  source={images.logo}
  className="w-[200px] h-[200px] rounded-full"  
  resizeMode="contain"
/>
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-u_bold text-center">
            The Shoe Store App offers a wide selection of stylish footwear with fast, secure delivery.
            </Text>
          </View>
          <Text className="text-sm font-j_bold text-gray-100 mt-7 text-center">
            Shop Now!
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7 border-2 border-white rounded-lg py-2 px-4"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
