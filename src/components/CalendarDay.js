import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

const SCHEDULESETTINGS = {
  Gündüz: { emo: "🥲", color: "primary" },
  Gece: { emo: "😒", color: "secondary" },
  İzin: { emo: "😎", color: "success" },
};

const CalendarDay = function (props) {
  const dayDetails = SCHEDULESETTINGS[props.schedule];
  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            {props.date.getDate()}
          </Typography>
          <Chip
            label={props.schedule}
            icon={<p>{dayDetails?.emo}</p>}
            color={dayDetails?.color}
            variant="outlined"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalendarDay;
