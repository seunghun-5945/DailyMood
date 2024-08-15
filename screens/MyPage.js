import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import profile from "../profile.json";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background: white;
`;

const Header = styled.View`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3% 0 3%;
`;

const Main = styled.View`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
`;

const ImageArea = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  margin-right: 5%;
`;

const ProfileSubArea = styled.View`
  width: 70%;
  height: 100%;
`;

const TextBox = styled.View`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const ProfileEditBtnBox = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileEditBtn = styled.TouchableOpacity`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1E90FF;
  border-radius: 5px;
`;

const Bottom = styled.View`
  width: 100%;
  height: 70%;
`;

const BadgeFrame = styled.View`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BadgeBox = styled.View`
  width: 25%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Badge = styled.View`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: gold;
`;

const MyPage = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/me");
        console.log(response.data);
      } catch (err) {
        console.log("통신에러", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{profile[0].nick_name}</Text>
        <Text onPress={() => navigation.navigate("SignIn")}>로그아웃</Text>
      </Header>
      <Main>
        <ImageArea>
          <ProfileImage source={{ uri: profile[0].icon }} />
          <Text>{profile[0].name}</Text>
        </ImageArea>
        <ProfileSubArea>
          <TextBox>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>0개</Text>
              <Text>커뮤니티 배지</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>80명</Text>
              <Text>친구</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>20개</Text>
              <Text>게시글</Text>
            </View>
          </TextBox>
          <ProfileEditBtnBox>
            <ProfileEditBtn><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>프로필 수정</Text></ProfileEditBtn>
          </ProfileEditBtnBox>
        </ProfileSubArea>
      </Main>
      <Bottom>
        <View style={{width: "100%",height: 1,backgroundColor: "lightgray",marginVertical: 10 }}/>
          <View
            style={{
              width: "100%",
              height: "10%",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: "3%"
            }}
          >
          <Text style={{ fontSize: 20 }}>커뮤니티 배지</Text>
        </View>
        <BadgeFrame>
          <BadgeBox>
            <Badge>
              <Icon name="guitar" style={{ fontSize: 30 }} />
            </Badge>
            <Text>기타광</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge>
              <Icon4 name="legal" style={{ fontSize: 30 }} />
            </Badge>
            <Text>정치</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge>
              <Icon name="bicycle" style={{ fontSize: 30 }} />
            </Badge>
            <Text>사이클</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge style={{ backgroundColor: "silver" }}>
              <Icon3 name="ramen-dining" style={{ fontSize: 30 }} />
            </Badge>
            <Text>일식 조리사</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge style={{ backgroundColor: "silver" }}>
              <Icon name="guitar" style={{ fontSize: 30 }} />
            </Badge>
            <Text>중식 조리사</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge style={{ backgroundColor: "silver" }}>
              <Icon name="hamburger" style={{ fontSize: 30 }} />
            </Badge>
            <Text>양식 조리사</Text>
          </BadgeBox>
          <BadgeBox>
            <Badge style={{ backgroundColor: "#cd7f32" }}>
              <Icon5 name="rice" style={{ fontSize: 30 }} />
            </Badge>
            <Text>한식 조리사</Text>
          </BadgeBox>
        </BadgeFrame>
      </Bottom>
    </Container>
  );
};

export default MyPage;
