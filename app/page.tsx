import { Button } from "@/components/ui/button"
import {TypographyH1} from "@/components/ui/typographyH1";
import {TypographyH3} from "@/components/ui/typographyH3";

export default function Home() {
  return (
    <div>
      <main>
          <TypographyH1>
              hello world!!!
          </TypographyH1>
          <TypographyH3>
              Hi!!!
          </TypographyH3>

          <Button variant="secondary">Button</Button>
      </main>
    </div>
  );
}
