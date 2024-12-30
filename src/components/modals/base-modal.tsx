import {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {IBaseModal} from '../../types';
import {AppButton, AppWhiteSpace} from '../atoms';

const BaseModal = (props: IBaseModal, ref: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const {children} = props;
  useImperativeHandle(ref, () => ({
    openModal() {
      setIsVisible(true);
    },
    closeModal() {
      closeCurrentModal();
    },
  }));
  const closeCurrentModal = () => {
    setIsVisible(false);
  };
  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackButtonPress={closeCurrentModal}
      onBackdropPress={closeCurrentModal}>
      <View style={styles.content}>
        {children}
        <AppWhiteSpace />
        <AppButton
          label="Close"
          isOutLined
          isLarge
          onPress={closeCurrentModal}
        />
      </View>
    </Modal>
  );
};

export default forwardRef(BaseModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(0 0 0 / 0.5)',
    margin: undefined,
  },
  content: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: 25,
  },
});
