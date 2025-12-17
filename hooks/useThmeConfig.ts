import { useColorScheme } from 'nativewind';

const useThemeConfig = () => {
  const { colorScheme } = useColorScheme();

  const isLight = colorScheme === 'light';

  return { isLight };
};

export default useThemeConfig;
