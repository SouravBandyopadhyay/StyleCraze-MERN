import { Link, Stack, HStack, IconButton, Image, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  "Blog",
  "Documentation",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];
const accounts = [
  {
    url: "https://github.com/SouravBandyopadhyay",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/souravbandyopadhyay/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      w="full"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      height="max-content"
      bg="blackAlpha.50"
    >
      <Image
        // objectFit="fit"
        src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png"
        alt="StyleCraze"
      />
      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>
      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
