import {Platform} from 'react-native';
import colors from '../theme/colors';

export default {
  text: {
    width: '100%',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenier',
    color: colors.black_1,
    minHeight: 50,
    textAlignVertical: 'center',
  },
};
