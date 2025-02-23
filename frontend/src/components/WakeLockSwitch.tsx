import{ useState } from "react";
import { Flex, Text, Switch } from "@chakra-ui/react";
 
const WakeLockSwitch = () => {
  const [isWakeLockEnabled, setIsWakeLockEnabled] = useState(false);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null); 

  
  const enableWakeLock = async () => {
    try {
      const wakeLock = await navigator.wakeLock.request("screen");
      setWakeLock(wakeLock); 
      console.log("Wake Lock is active");
    } catch (err) {
      console.error("Failed to enable Wake Lock:", err);
    }
  };

  
  const disableWakeLock = async () => {
    if (wakeLock) {
      await wakeLock.release();
      setWakeLock(null); 
      console.log("Wake Lock is disabled");
    }
  };

  // Handle Switch change
  const handleSwitchChange = async () => {
    if (!isWakeLockEnabled) {
      await enableWakeLock(); 
    } else {
      await disableWakeLock(); 
    }
    setIsWakeLockEnabled(!isWakeLockEnabled); 
  };
 
 
 return (
    <Flex
      direction={"row"}
      display={{ base: "flex", lg: "none" }}
      py={2}
      gap={4}
    >
      <Text fontSize={"sm"}>Hold skærmen tændt</Text>
      <Switch
        width={"min-content"}
        colorScheme="peachbrown"
        color={"peachbrown.500"}
        isChecked={isWakeLockEnabled}
        onChange={handleSwitchChange}
      />
    </Flex>
  );
};

export default WakeLockSwitch;