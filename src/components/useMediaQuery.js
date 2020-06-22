import { device } from '../utils/themes';
import { useMediaQuery as useThisMediaQuery } from '@material-ui/core';

const useMediaQuery = deviveBreakpoint =>
  useThisMediaQuery(() => device[deviveBreakpoint]);

export default useMediaQuery;
