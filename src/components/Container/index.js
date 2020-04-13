import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ModalStyled from "../Modal";
import {
  BoxContentMainStyled,
  BoxContentStyled,
  ContainerMainStyled,
} from "./styles";

export default function Container({
  container,
  modalVisible,
  modalChangeStatus,
  data,
  newPost,
  postEdit,
}) {
  const [user, setUser] = useState({});
  Container.defaultProps = {
    modalVisible: false,
    data: {},
    postEdit: null,
  };

  Container.propTypes = {
    modalVisible: PropTypes.bool,
  };

  useEffect(() => {
    if (data) setUser({ ...data });
  }, [data]);

  return (
    <ContainerMainStyled modalVisible={modalVisible}>
      <BoxContentMainStyled
        modalVisible={modalVisible}
        style={{ borderTopEndRadius: 50, borderTopStartRadius: 50 }}
      >
        <BoxContentStyled
          modalVisible={modalVisible}
          style={{ borderTopEndRadius: 50, borderTopStartRadius: 50 }}
        >
          {container}
          {modalVisible && (
            <ModalStyled
              modalChangeStatus={(status) => {
                modalChangeStatus(status);
              }}
              newPost={(post) => newPost(post)}
              modalVisible={modalVisible}
              user={user}
              postEdit={postEdit}
            />
          )}
        </BoxContentStyled>
      </BoxContentMainStyled>
    </ContainerMainStyled>
  );
}
