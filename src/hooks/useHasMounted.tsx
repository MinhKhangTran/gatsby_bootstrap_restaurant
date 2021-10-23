import React from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

// https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
