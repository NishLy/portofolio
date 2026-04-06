import classNames from "classnames";
import BrandLogo from "./logo_brand";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  disabled?: boolean;
  onClick: () => void;
}

function CategoryButton({
  category,
  isSelected,
  disabled = false,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      key={category}
      disabled={disabled}
      className={classNames(
        "cursor-pointer px-5 py-2 uppercase text-sm font-medium flex gap-2 items-center rounded-full border border-primary/40 bg-linear-to-r from-primary/15 to-primary/5 text-primary hover:border-primary/70 hover:from-primary/25 hover:to-primary/10 hover:shadow-lg transition-all duration-300",
        {
          "bg-primary/30 text-white": isSelected,
          "opacity-50 cursor-not-allowed": disabled,
        },
      )}
      onClick={onClick}
    >
      {BrandLogo(category)} {category}
    </button>
  );
}

export default CategoryButton;
