import React, { useState } from "react";
import { Alert, Text } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Frame = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Main = styled.View`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InputArea = styled.TextInput`
  width: 80%;
  height: 20%;
  background-color: #F2F2F2;
  border-radius: 5px;
  padding-left: 3%;
`;

const EnterBtn = styled.TouchableOpacity`
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: salmon;
  border-radius: 5px;
`;

const Footer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SignIn = () => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const SendAxios = async () => {
    console.log(id, pw);
    try {
      const response = await axios.post("http://localhost:8000/api/login",{
          username: id,
          password: pw,
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      console.log(response.data.access_token);
      await AsyncStorage.setItem('access_token', response.data.access_token);
      navigation.navigate('Main'); 
    } catch (err) {
      console.log(err);
      Alert.alert("잘못된 아이디 혹은 비밀번호 입니다.")
    }
  };

  return (
    <Container>
      <Frame>
        <Header>
          <Icon name="moon-o" size={45} color="yellow" />
          <Text style={{ fontSize: 45, fontFamily: "continuous", color: "white" }}>DailyMood</Text>
          <Text style={{ fontSize: 20, color: "gray" }}>하루 하루 기록하고 나누는 나만의 무드</Text>
        </Header>
        <Main>
          <InputArea
            placeholder="전화번호 또는 이메일주소"
            onChangeText={(text) => setId(text)}
          />
          <InputArea
            placeholder="비밀번호"
            secureTextEntry
            onChangeText={(text) => setPw(text)}
          />
          <EnterBtn onPress={SendAxios}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>로그인</Text>
          </EnterBtn>
        </Main>
        <Footer>
          <Text style={{ fontSize: 15, color: "white" }}>계정 정보를 잊으셨나요?</Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={{ fontSize: 15, color: "white" }}>아직 회원이 아니신가요?</Text>
        </Footer>
      </Frame>
    </Container>
  );
};

export default SignIn;
