import { Box, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


interface AsideToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AsideToggleButton = ({ isOpen, onToggle }: AsideToggleButtonProps) => {
  return (
    <Box display={{ lg: 'none' }} px={0} position={"fixed"} top={0} left={0} zIndex={10}>
      <IconButton
        variant={"flushed"}
        aria-label="Open Aside"
        fontSize={"2rem"}
        height={"64px"}
        width={"64px"}
        color={"palecream.500"}
        icon={isOpen ? <CloseIcon height={"25px"} width={"25px"} /> : <HamburgerIcon />}
        onClick={onToggle}
      />
    </Box>
  );
};

export default AsideToggleButton;