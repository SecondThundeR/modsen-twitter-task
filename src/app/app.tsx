import { Routing } from "@/pages";

import { withProviders } from "./providers";

const App = withProviders(() => {
  return <Routing />;
});

export default App;
