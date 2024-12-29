export type RootStackParamList = {
  Home: undefined;
  AddTransation: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
