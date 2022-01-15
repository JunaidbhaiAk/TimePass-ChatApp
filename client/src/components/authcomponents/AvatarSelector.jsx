import React,{useState} from 'react'
import { data } from "./avatarlinks";
import {Popover,PopoverTrigger,PopoverContent,PopoverBody,PopoverArrow,Avatar,Grid,GridItem} from '@chakra-ui/react'

const AvatarSelector = ({setprofile,info}) => {

    const [profileimg, setprofileimg] = useState("");
    const [popopen, setpopopen] = useState(false);
    const handle = () => setpopopen(!popopen);

    const selectAvatar = (e) => {
        setprofileimg(e.target.currentSrc);
        setprofile((pre) => {
          return { ...pre, avatar: e.target.currentSrc };
        });
        handle();
      };
    return (
        <div>
            <Popover isOpen={popopen}>
              <PopoverTrigger>
                <Avatar
                  size="md"
                  src={profileimg !== "" ? profileimg : ""}
                  onClick={handle}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody margin="6px">
                  <Grid templateColumns="repeat(4, 1fr)" gap={1}>
                    {data.map((ele) => {
                      return (
                        <GridItem>
                          <Avatar src={ele} onClick={selectAvatar} />
                        </GridItem>
                      );
                    })}
                  </Grid>
                </PopoverBody>
              </PopoverContent>
            </Popover>
        </div>
    )
}

export default AvatarSelector
