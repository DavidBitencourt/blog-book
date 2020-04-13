import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, TextInput, View } from "react-native";
import { v4 } from "react-native-uuid";
import Button from "../Button";
import { BoxButtonsStyled, TextInfoStyled } from "./styles";
const ModalStyled = ({
  modalVisible,
  modalChangeStatus,
  newPost,
  user,
  postEdit,
}) => {
  ModalStyled.defaultProps = {
    modalVisible: false,
    modalChangeStatus: () => {},
    newPost: () => {},
    postEdit: null,
  };

  ModalStyled.propTypes = {
    modalVisible: PropTypes.bool,
    modalChangeStatus: PropTypes.func,
    newPost: PropTypes.func,
    postEdit: PropTypes.object,
  };

  const [textPost, setTextPost] = useState("");

  useEffect(() => {
    postEdit && setTextPost(postEdit.text);
  }, [postEdit]);

  async function registerPost() {
    if (textPost) {
      let id = v4();
      await newPost({
        id: postEdit ? postEdit.id : id,
        idUser: postEdit ? postEdit.idUser : user.id,
        name: postEdit ? postEdit.name : user.name,
        date: moment(new Date()).format("LLLL"),
        text: textPost,
      });
      setTextPost("");
      modalChangeStatus(false);
    } else {
      Alert.alert("Para publicar, escreva uma mensagem.");
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          modalChangeStatus(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInfoStyled>máximo de até 280 caracteres</TextInfoStyled>
            <TextInput
              value={textPost}
              onChangeText={(text) => setTextPost(text)}
              multiline
              maxLength={280}
              style={{
                width: "80%",
                padding: 25,
                height: 200,
                borderRadius: 10,
                borderWidth: 1,
                fontWeight: "normal",
                fontSize: 20,
                lineHeight: 25,
                color: "#4f4f4f",
                borderColor: "#eb8a75",
                textAlign: "left",
                marginTop: 10,
              }}
            />
            <BoxButtonsStyled>
              <Button
                text="cancelar"
                textColor="#eb8a75"
                backgroundColor="#ffffff"
                handler={() => {
                  setTextPost("");
                  modalChangeStatus(false);
                }}
                width={37}
              />
              <Button
                text={postEdit ? "editar" : "publicar"}
                textColor="#ffffff"
                backgroundColor="#eb8a75"
                handler={() => {
                  registerPost();
                }}
                width={37}
              />
            </BoxButtonsStyled>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 120,
  },
  modalView: {
    width: "100%",
    height: "100%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalStyled;
