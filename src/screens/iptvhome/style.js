import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
  },
  sectionMain: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
  },
  sectionLeft: {
    marginLeft: 30,
    width: '32%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  sectionLeftLinear: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  animationContainer: {
    backgroundColor: 'rgba(6, 21, 18, 0.7)',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  sectionLeftText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
  },
  updatingText:{
    fontSize:17,
    fontWeight:"500",
    color:'white',
  },
  sectionRight: {
    width: '60%',
    height: '100%',
    borderColor: 'green',
    marginLeft: 20,
  },
  sectionRightTop: {
    flexDirection: 'row',
    height: '70%',
    borderColor: 'white',
    justifyContent: 'space-between',
  },
  sectionTopboxes: {
    height: '100%',
    width: '48%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionRightTopText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 17,
  },
  sectionRightBottom: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionRightBottomButton: {
    backgroundColor: '#75AD8A',
    marginLeft: 5,
    borderRadius: 10,
    height: 60,
    width:"32%",
    alignItems: 'center',
    flexDirection: 'row',
  },
  sbButtonText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 6,
    fontSize: 14,
  },
  Icon: {
    marginLeft: 5,
  },
  footer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerText: {
    color: 'white',
  },
});
export default styles;
