import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome"
import axios from "axios";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Footer = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputArea = styled.TextInput`
  width: 80%;
  height: 12%;
  background-color: #F2F2F2;
  border-radius: 5px;
  padding-left: 3%;
`;

const TextArea = styled.View`
  width: 80%;
  height: 15%;
`;

const SignUpBtn = styled.TouchableOpacity`
  width: 80%;
  height: 80%;
  background-color: salmon;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const SignUp = () => {
  const navigation = useNavigation();
  const [nickName, setNickName] = useState("");
  const [mail, setMail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const SendAxios = async () => {
    try {
      await axios.post("http://localhost:8000/api/signup", {
        username: nickName,
        email: mail,
        password: pw,
        full_name: name,
        bio: "비공개",
        profile_picture: "https://cdn.pixabay.com/photo/2022/12/23/15/41/moon-7674557_960_720.jpg"
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      Alert.alert("회원가입에 성공하셨습니다");
      navigation.navigate("SignIn");
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Frame>
        <Header>
          <Icon name="sun-o" size={45}  color="tomato"/>
          <Text style={{fontSize:45, fontFamily:"continuous"}}>DailyMood</Text>
          <Text style={{fontSize:20, color:"gray"}}>하루 하루 기록하고 나누는 나만의 무드</Text>
        </Header>
        <Main>
          <InputArea 
            placeholder="사용할 닉네임"
            onChangeText={(text) => setNickName(text)}
          />
          <InputArea 
            placeholder="이메일 주소"
            onChangeText={(text) => setMail(text)}
          />
          <InputArea 
            placeholder="비밀번호"
            secureTextEntry
            onChangeText={(text) => setPw(text)}
          />
          <InputArea 
            placeholder="성명"
            onChangeText={(text) => setName(text)}
          />
          <View style={{width:"80%", height:"10%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
            <Text style={{color:"gray"}}>성별 및 사진 설정(선택)</Text>
          </View>
          <TextArea>
            <View style={{width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
              <Text>이미 아이디가 있으신가요?</Text>
              <Text onPress={() => navigation.navigate("SignIn")}>  로그인하기</Text>
            </View>
          </TextArea>
        </Main>
        <Footer>
          <SignUpBtn onPress={SendAxios}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>회원가입</Text>
          </SignUpBtn>
        </Footer>
      </Frame>
    </Container>
  );
};

export default SignUp;
