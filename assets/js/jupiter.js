// npm install @jup-ag/terminal
import "@jup-ag/terminal/css";

const walletProps = useWallet();
useEffect(() => {
  if (typeof window !== "undefined") {
    import("@jup-ag/terminal").then((mod) => {
      const init = mod.init;
      init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://api.mainnet-beta.solana.com",
        formProps: {
          fixedOutputMint: true,
          swapMode: "ExactIn",
          initialOutputMint: "4zUmw6iTRhREKZLv1p7mLADrMHXG7XZ78h24fpsMmfQc",
        },
      });
    });
  }
}, []);