import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const submit = () => {
    
    
    setIsSubmitting(true);

    setTimeout(() => {
      router.push('/sign-in');
    }, 1000); 
  };

  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-1">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[200px] h-[200px]  rounded-full"
          />
          <Text className="text-2xl text-white mt-5 font-u_regular">
            Sign up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-5"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit} 
            containerStyles="w-full mt-7"
            isLoading={isSubmitting} 
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-u_bold text-orange-600">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;