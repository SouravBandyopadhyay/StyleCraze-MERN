import {
  Box,
  Image,
  VStack,
  SimpleGrid,
  Heading,
  Text
} from "@chakra-ui/react";
import ArticleList from "../Components/Home/Blog";
import HealthArticle from "../Components/Home/Health";
const HomePage = () => {
  return (
    <Box textTransform="capitalize">
      <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]} padding={1}>
        <VStack>
          <Image
            src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Wear-Red-Lipstick-1-1.jpg.webp"
            alt=""
            srcset=""
          />
          <Heading as="h3" size="lg">
            How to Wear Red Lipstick
          </Heading>
        </VStack>
        <VStack>
          <Image
            src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/20-Amazing-Platinum-Hair-Shades-To-Try-1.jpg.webp"
            alt="broken"
            srcset=""
          />
          <Heading as="h3" size="lg" noOfLines={2}>
            20 Amazing Platinum Shades to Try
          </Heading>
        </VStack>
        <VStack>
          <Image
            src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/30-3D-Nail-Art-Designs-To-Take-Your-Nails-To-The-Next-Dimension-1.jpg.webp"
            alt=""
            srcset=""
          />
          <Heading as="h3" size="lg">
            30 3D Nail Arts Designs
          </Heading>
        </VStack>
      </SimpleGrid>
      <Box className="heading_2">
        <Image
          src="https://i.postimg.cc/gkwvJj6b/img-1.jpg://postimg.cc/MvSc3WD9"
          alt=""
          srcset=""
        />
      </Box>
      <Box>
        <ArticleList />
      </Box>
      <Box backgroundColor="#FF597B" padding="5">
        <Heading
          fontWeight="400"
          color="white"
          textDecoration="underline"
          marginBottom="6"
        >
          HAIR CARE
        </Heading>
        <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
          <Box>
            <Image
              borderRadius="lg"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2020/11/13-Top-Winter-Hair-Care-Tips-For-Healthy-Locks-1.jpg.webp"
            />
          </Box>
          <Box
            backgroundColor="white"
            padding="5"
            textAlign="left"
            margin="auto"
            borderRadius="lg"
            marginLeft={["0", "-10"]}
          >
            <Heading size="lg">
              13 Top Winter Hair Care Tips For Healthy Locks
            </Heading>
            <Text size="md" marginTop="4">
              Sitting by the fire with a hot cup of cocoa and covered by a warm
              wooly blanket – there is nothing like winter. But while you may be
              having the best time of your life, your hair is not! With
            </Text>
            <Text marginTop="4" fontWeight="600">
              Medically Reviewed by &#160;
              <Text color="pink.400" display="inline-block">
                Dr. Shruti Chavan
              </Text>
              , MBBS
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          spacing="4"
          marginTop="10"
        >
          <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
            <Box>
              <Image
                borderRadius="lg"
                src="https://cdn2.stylecraze.com/wp-content/uploads/2020/11/Can-I-Dye-My-Hair-While-Pregnant-How-To-Do-It-With-Caution-1.jpg.webp"
              />
            </Box>
            <Box
              backgroundColor="white"
              padding="5"
              textAlign="left"
              margin="auto"
              borderRadius="lg"
              marginLeft={["0", "-10"]}
            >
              <Heading size="sm">
                Can I Dye My Hair While Pregnant? How To Do It With Caution?
              </Heading>

              <Text marginTop="4" fontWeight="600">
                Medically Reviewed by &#160;
                <Text color="pink.400" display="inline-block">
                  Dr. Jennifer Mercier,
                </Text>
                , ND, PhD
              </Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
            <Box>
              <Image
                borderRadius="lg"
                src="https://cdn2.stylecraze.com/wp-content/uploads/2020/11/How-To-Wash-Your-Natural-Hair-To-Prevent-Breakage-1.jpg.webp"
              />
            </Box>
            <Box
              backgroundColor="white"
              padding="5"
              textAlign="left"
              margin="auto"
              borderRadius="lg"
              marginLeft={["0", "-10"]}
            >
              <Heading size="sm">
                How To Wash Your Natural Hair To Prevent Breakage
              </Heading>

              <Text marginTop="4" fontWeight="600">
                Medically Reviewed by &#160;
                <Text color="pink.400" display="inline-block">
                  Ghanima Abdullah
                </Text>
                , Cosmetologist
              </Text>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <Box marginTop="5" paddingBottom="5" backgroundColor="#FF597B">
        <Heading
          fontWeight="400"
          color="white"
          textDecoration="underline"
          marginBottom="6"
          paddingTop="4"
        >
          MEDIA COVERAGE
        </Heading>
        <Image
          src="https://i.postimg.cc/3Rb2CSSW/Web-capture-24-8-2022-2455-www-stylecraze-com.jpg"
          alt=""
          objectFit="contain"
          srcset=""
        />
      </Box>
      <Box>
        <HealthArticle />
        <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]} margin="auto">
          <Box>
            <Image
              margin="auto"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/15-Homemade-Protein-Shakes--Healthy-Tasty-5-Min-Recipes.jpg.webp"
              objectFit="contain"
              alt="brokenImg"
              borderRadius="md"
            />
            <Text fontWeight="700" fontSize="lg" p={2}>
              15 Homemade Protein Shakes – Healthy & Tasty
            </Text>
            <Text marginTop="1" fontWeight="500">
              Medically Reviewed by &#160;
              <Text color="pink.400" display="inline-block">
                Dr.Jacob Wilson
              </Text>
              , PhD, CSCS*D
            </Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/3-day-7-day-Detox-Diet-Plan-For-Weight-Loss-That-Really-Work.jpg.webp"
              objectFit="contain"
              alt="brokenImg"
              borderRadius="md"
            />
            <Text fontWeight="700" fontSize="lg" p={2}>
              3-day & 7-day Detox Diet Plan For Weight Loss That Really Works
            </Text>
            <Text marginTop="1" fontWeight="500">
              Medically Reviewed by &#160;
              <Text color="pink.400" display="inline-block">
                Dr. Jill Carnahan
              </Text>
              , MD, ABFM, ABIHM
            </Text>
          </Box>
          <Box>
            <Image
              margin="auto"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/Winter-Melon-Nutrition-Benefits-Side-Effects-Precautions.jpg.webp"
              objectFit="contain"
              alt="brokenImg"
              borderRadius="md"
            />
            <Text fontWeight="700" fontSize="lg">
              Winter Melon: Nutrition, Benefits, Side Effects, & Precautions
            </Text>
            <Text marginTop="1" fontWeight="500" fontSize="md">
              Medically Reviewed by &#160;
              <Text color="pink.400" display="inline-block">
                Dr. Pallavi Srivastava,
              </Text>
              , PG Diploma in Sports Science & Fitness Nutrition
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box backgroundColor="#FF597B" padding="5" marginTop="4">
        <Heading
          fontWeight="400"
          color="white"
          textDecoration="underline"
          marginBottom="6"
        >
          SKIN CARE
        </Heading>
        <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
          <Box>
            <Image
              borderRadius="lg"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/13-Essential-Winter-Skin-Care-Tips-That-You-Should-Follow-1-1.jpg.webp"
            />
          </Box>
          <Box
            backgroundColor="white"
            padding="5"
            textAlign="left"
            margin="auto"
            borderRadius="lg"
            marginLeft={["0", "-10"]}
          >
            <Heading size="lg">
              13 Essential Winter Skin Care Tips That You Should Follow
            </Heading>
            <Text size="md" marginTop="4">
              “To keep a warm heart in winter is the real victory”, they say.
              But to keep healthy skin in winter is the real challenge. If you
              are struggling to maintain your skin during winter, we have a few
              winter face...
            </Text>
            <Text marginTop="4" fontWeight="600">
              Medically Reviewed by &#160;
              <Text color="pink.400" display="inline-block">
                Dr. Shruti Chavan
              </Text>
              , MBBS
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          spacing="4"
          marginTop="10"
        >
          <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
            <Box>
              <Image
                borderRadius="lg"
                src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Skin-Care-Acids-Guide-How-To-Pick-The-Right-Skin-Care-Acid-1.jpg.webp"
              />
            </Box>
            <Box
              backgroundColor="white"
              padding="5"
              textAlign="left"
              margin="auto"
              borderRadius="lg"
              marginLeft={["0", "-10"]}
            >
              <Heading size="sm">
                Skin Care Acids Guide: How To Pick The Right Skin Care Acid
              </Heading>

              <Text marginTop="4" fontWeight="600">
                Medically Reviewed by &#160;
                <Text color="pink.400" display="inline-block">
                  Dr. Jennifer Mercier,
                </Text>
                , ND, PhD
              </Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]}>
            <Box>
              <Image
                borderRadius="lg"
                src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/15-Amazing-Homemade-Chocolate-Face-Masks-For-Flawless-Skin-1.jpg.webp"
              />
            </Box>
            <Box
              backgroundColor="white"
              padding="5"
              textAlign="left"
              margin="auto"
              borderRadius="lg"
              marginLeft={["0", "-10"]}
            >
              <Heading size="sm">
                15 Amazing Homemade Chocolate Face Masks For Flawless Skin
              </Heading>

              <Text marginTop="4" fontWeight="600">
                Medically Reviewed by &#160;
                <Text color="pink.400" display="inline-block">
                  Ghanima Abdullah
                </Text>
                , Cosmetologist
              </Text>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default HomePage;
