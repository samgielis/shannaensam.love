import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  ListItem,
  Stack,
  Textarea,
  UnorderedList,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { RSVP } from "../../data/RSVP";
import { trans, translations } from "../../translations";
import { StepProps } from "./index";

const ConfirmationEmoji = ({ joins }: { joins: boolean }) => {
  return <span>{joins ? `✅` : `❌`}</span>;
};

export const Step4 = ({
  language,
  invitation,
  rsvp,
  onNoteChange,
}: StepProps & { rsvp: RSVP; onNoteChange: (notes: string) => void }) => {
  const { tier } = invitation;
  const notesInputRef = React.createRef<HTMLTextAreaElement>();
  return (
    <Stack>
      <Card variant="outline">
        <CardBody>
          <Stack spacing={3}>
            <UnorderedList>
              <ListItem>
                {trans(translations.invitation.step4.canContact, language)}{" "}
                <b>{rsvp.email}</b>
              </ListItem>
              <ListItem>
                {rsvp.amountOfPeople === 1 ? (
                  trans(
                    translations.invitation.step4.peopleComing.single,
                    language
                  )
                ) : (
                  <>
                    <b>{rsvp.amountOfPeople}</b>{" "}
                    {trans(
                      translations.invitation.step4.peopleComing.multiple,
                      language
                    )}
                  </>
                )}
                :
                <UnorderedList>
                  {tier === 1 && (
                    <ListItem>
                      <ConfirmationEmoji joins={rsvp.joinsCivilWedding} />{" "}
                      <b>
                        {trans(
                          translations.invitation.step3.civilWedding,
                          language
                        )}
                      </b>
                    </ListItem>
                  )}
                  {tier === 1 && (
                    <ListItem>
                      <ConfirmationEmoji joins={rsvp.joinsCeremony} />{" "}
                      <b>
                        {trans(
                          translations.invitation.step3.ceremony,
                          language
                        )}
                      </b>
                    </ListItem>
                  )}
                  {tier < 3 && (
                    <ListItem>
                      <ConfirmationEmoji joins={rsvp.joinsDiner} />{" "}
                      <b>
                        {trans(translations.invitation.step3.diner, language)}
                      </b>
                    </ListItem>
                  )}
                  <ListItem>
                    <ConfirmationEmoji joins={rsvp.joinsParty} />{" "}
                    <b>
                      {trans(translations.invitation.step3.party, language)}
                    </b>
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
      </Card>

      <Card variant="outline">
        <CardBody>
          <FormControl>
            <FormLabel>
              {trans(translations.invitation.step4.notes.label, language)}
            </FormLabel>
            <Textarea
              onChange={(e) => onNoteChange(e.currentTarget.value)}
              ref={notesInputRef}
              placeholder={trans(
                translations.invitation.step4.notes.placeholder,
                language
              )}
            />
          </FormControl>
        </CardBody>
      </Card>
      <form name="rsvp" method="POST" data-netlify="true" action="/confirmed">
        <Stack w="full">
          <Button type="submit" colorScheme={"bermuda"} w="full">
            {trans(translations.confirm, language)}
          </Button>
          <>
            <VisuallyHidden>
              <input type="hidden" name="form-name" value="rsvp" />
            </VisuallyHidden>
            <VisuallyHidden>
              <textarea
                required={true}
                name="rsvpjson"
                value={JSON.stringify(rsvp)}
                readOnly
              />
            </VisuallyHidden>
          </>
        </Stack>
      </form>
    </Stack>
  );
};
