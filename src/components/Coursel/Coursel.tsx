import {
  LinearProgress,
  Select,
  Stack,
  Typography,
  MenuItem,
  ListItemText,
  SelectChangeEvent,
  Checkbox,
  OutlinedInput,
  IconButton,
  Link,
  SxProps,
} from "@mui/material";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "../hover.css";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
interface CourselProps {
  data: {
    date: string;
    url: string;
    title: string;
    category: string[];
    thumbnail: string;
  }[];
  selectSx?: SxProps;
}

const ScrollCourselContext = createContext<{
  left: number;
  scrollParallax: number;
}>({ left: 0, scrollParallax: 0 });

const Coursel = ({ data, selectSx }: CourselProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const [scrollLeft, setScrollLeft] = useState<{
    left: number;
    scrollParallax: number;
  }>({
    left: 0,
    scrollParallax: 0,
  });

  useEffect(() => {
    let isMouseDown = false;
    let velX = 0;
    let prefLeft = 0;

    const downEventHandler = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (!ref.current) return;
      velX =
        e instanceof TouchEvent
          ? e.touches[0].pageX - ref.current.offsetLeft
          : (e as MouseEvent).pageX - ref.current.offsetLeft;
      document.body.style.cursor = "grabbing";
      isMouseDown = true;
    };

    const moveEventHandler = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      const current = e.currentTarget as HTMLDivElement;
      const x =
        e instanceof TouchEvent
          ? e.touches[0].pageX - current.offsetLeft
          : (e as MouseEvent).pageX - current.offsetLeft;

      if (!isMouseDown) return;
      /* The code snippet `current.scrollTo({ left: prefLeft + (velX - x) / 20, behavior: "auto" });` is used
to scroll the `ref` element horizontally based on the mouse movement. */

      current.scrollTo({
        left: prefLeft + (velX - x) / 20,
        behavior: "auto",
      });

      prefLeft = current.scrollLeft;

      /* The code snippet calculates the scroll percentage of the `ref` element and then calculates the
 corresponding scroll position for the image. */
      const currentScrollPrecentage =
        (current.scrollLeft / (current.scrollWidth - current.offsetWidth)) * 1;
      const imageScrollPercentage = 500 * currentScrollPrecentage;

      setScrollLeft({
        left: current.scrollLeft,
        scrollParallax: imageScrollPercentage,
      });

      setScrollProgress(
        (current.scrollLeft / (current.scrollWidth - current.offsetWidth)) * 100
      );
    };

    const upEventHandler = () => {
      if (!ref.current) return;
      isMouseDown = false;
      document.body.style.cursor = "auto";
    };

    /* This code snippet adds an event listener to the `mousedown` event on the `ref` element. When the
user presses the mouse button down on the element, the event listener function is called. */
    ref.current?.addEventListener("mousedown", downEventHandler);

    ref.current?.addEventListener("mousemove", moveEventHandler);

    ref.current?.addEventListener("mouseup", upEventHandler);

    ref.current?.addEventListener("touchstart", downEventHandler);
    ref.current?.addEventListener("touchmove", moveEventHandler);
    ref.current?.addEventListener("touchend", upEventHandler);

    return () => {
      ref.current?.removeEventListener("mousedown", () => {});
      ref.current?.removeEventListener("mousemove", () => {});
      ref.current?.removeEventListener("mouseup", () => {});

      ref.current?.removeEventListener("touchstart", () => {});
      ref.current?.removeEventListener("touchmove", () => {});
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("touchend", () => {});
    };
  }, []);

  const categories = useMemo(() => {
    const categories: string[] = [];
    data.forEach((item) => {
      item.category.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
    return categories;
  }, [data]);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "website",
    "backend",
    "frontend",
    "mobile",
  ]);

  const handleChange = (event: SelectChangeEvent<typeof selectedCategory>) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(
      !selectedCategory.includes(value as string)
        ? selectedCategory.concat(value)
        : selectedCategory.filter((item) => item !== value)
    );
  };

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        let isMatch = false;
        item.category.forEach((category) => {
          if (selectedCategory.includes(category)) {
            isMatch = true;
          }
        });
        return isMatch;
      })
    );
  }, [selectedCategory, data]);

  const forward = () => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: ref.current.scrollLeft + 200,
      behavior: "smooth",
    });
    setScrollLeft({
      left: ref.current.scrollLeft,
      scrollParallax:
        (ref.current.scrollLeft /
          (ref.current.scrollWidth - ref.current.offsetWidth)) *
        1 *
        500,
    });
    setScrollProgress(
      (ref.current.scrollLeft /
        (ref.current.scrollWidth - ref.current.offsetWidth)) *
        100
    );
  };

  const backward = () => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: ref.current.scrollLeft - 200,
      behavior: "smooth",
    });
    setScrollLeft({
      left: ref.current.scrollLeft,
      scrollParallax:
        (ref.current.scrollLeft /
          (ref.current.scrollWidth - ref.current.offsetWidth)) *
        1 *
        500,
    });
    setScrollProgress(
      (ref.current.scrollLeft /
        (ref.current.scrollWidth - ref.current.offsetWidth)) *
        100
    );
  };

  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={5}
        position="relative"
      >
        <Select
          size="small"
          value={selectedCategory}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: "var(--background-color)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--accent-color)",
                },
              },
            },
          }}
          sx={{
            width: "70vw",
            ...selectSx,
          }}
        >
          {categories.map((category: string) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={selectedCategory.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
        <IconButton
          sx={{
            position: "absolute",
            left: "2rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,.5)",
          }}
          onClick={backward}
        >
          <ArrowLeft
            sx={{
              width: {
                xs: "2rem",
                sm: "3rem",
              },
              height: "auto",
              aspectRatio: "1/1",
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            right: "2rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,.5)",
          }}
          onClick={forward}
        >
          <ArrowRight
            sx={{
              width: {
                xs: "2rem",
                sm: "3rem",
              },
              height: "auto",
              flexShrink: 0,
              aspectRatio: "1/1",
            }}
          />
        </IconButton>
        <Stack
          ref={ref}
          direction="row"
          gap={2}
          overflow="hidden"
          maxWidth="100vw"
          position="relative"
          sx={{}}
        >
          <div style={{ width: "30.5vw", flexShrink: 0, height: "100%" }}></div>
          <ScrollCourselContext.Provider value={scrollLeft}>
            {filteredData.map((data, i) => (
              <ImageWrapper {...data} key={data.title + i} />
            ))}
          </ScrollCourselContext.Provider>
          <div style={{ width: "30.5vw", flexShrink: 0, height: "100%" }}></div>
        </Stack>

        <LinearProgress
          sx={{ width: "70%", height: "1px" }}
          variant="determinate"
          value={scrollProgress}
        />
      </Stack>
    </>
  );
};

export default Coursel;
function ImageWrapper({
  thumbnail,
  category,
  date,
  title,
  url,
}: {
  date: string;
  title: string;
  url: string;
  category: string[];
  thumbnail: string;
}) {
  const ref = useRef<HTMLImageElement | null>(null);
  const scrollContext = useContext(ScrollCourselContext);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateX(-${scrollContext.scrollParallax}px)`;
    }
  }, [scrollContext]);

  function printDate(date: string) {
    const newDate = new Date(date);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${month[newDate.getMonth()]} ${newDate.getFullYear()}`;
  }
  return (
    <>
      <div
        style={{
          padding: "0 !important",
          width: "18rem",
          margin: "0 !important",
          aspectRatio: "10/16",
          overflowX: "clip",
          borderRadius: ".5rem",
          display: "flex",
          flexShrink: 0,
          justifyContent: "flex-start",
          position: "relative",
        }}
        className="blur"
      >
        <img
          ref={ref}
          src={thumbnail}
          style={{
            aspectRatio: "16/9",
            height: "100%",
            transition: ".3 ease-in transform",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          loading="lazy"
          alt={title}
        ></img>
        <Stack
          spacing={1}
          component="div"
          width="100%"
          height="100%"
          visibility="hidden"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Typography variant="body2">{printDate(date)}</Typography>
          <Typography variant="h3" fontWeight={800} textAlign="center">
            {title}
          </Typography>
          <Typography
            textTransform="capitalize"
            variant="body1"
            textAlign="center"
          >
            {category.join(", ")}
          </Typography>
          <Link href={url} target="_blank" marginTop="auto">
            <Typography variant="body2">See Project</Typography>
          </Link>
        </Stack>
      </div>
    </>
  );
}
