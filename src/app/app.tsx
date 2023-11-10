import { Routing } from "@/pages";

import { WithProviders } from "./providers";

const App = () => {
  return (
    <WithProviders>
      <Routing />
    </WithProviders>
  );
};

export default App;
