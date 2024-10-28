import { useEffect, useState } from "react";
import MemberItem from "./MemberItem";
import axios from "axios";
import toast from "react-hot-toast";
import { Member } from "@/zodSchema/memberSchema";
import { PaginationBtn } from "@/components/button/ButtonComponents";
import { CiSquarePlus } from "react-icons/ci";
import { useAtom } from "jotai";
import { InvitationDashboardAtom } from "@/store/modalAtom";
import InviteItem from "./InviteItem";
/* 초대 res
{
  "invitations": [
    {
      "id": 13452,

      "inviter": {
        "id": 4668,
        "email": "yelim@fe.fe",
        "nickname": "yelim"
      },

      "teamId": "9-4",
      
      "dashboard": {
        "id": 12067,
        "title": "수정테스트"
      },

      "invitee": {
        "id": 4701,
        "email": "cccwon5@naver.com",
        "nickname": "슈퍼펭귄스"
      },

      "inviteAccepted": null,

      "createdAt": "2024-10-26T08:59:15.950Z",

      "updatedAt": "2024-10-26T08:59:15.950Z"
      
    }
  ],
  "totalCount": 1
}
*/

// onClick={() => setIsInvitationDashboardOpen(true)}
const InviteList = ({ dashboardId }: { dashboardId: number }) => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const size = 5;
  const [inviteList, setInviteList] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invitationId, setInvitationId] = useState();
  const [, setIsInvitationDashboardOpen] = useAtom(InvitationDashboardAtom);

  const totalPage: number = Math.ceil(totalCount / size);
  const isFirst = page === 1;
  const isLast = page === totalPage;
  const onClickPrev = () => {
    if (!isFirst) setPage(page - 1);
  };
  const onClickNext = () => {
    if (!isLast) setPage(page + 1);
  };

  const fetchDashboardInvitationList = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`/api/dashboards/${dashboardId}/invitations?page=${page}&size=${size}`);
      const data = res.data;
      setInviteList(data.invitations || []);
      console.log("data", data);
      setTotalCount(data.totalCount);
      setInvitationId(data.invitations.id);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardInvitationList();
  }, [dashboardId]);

  useEffect(() => {
    if (!isLoading && inviteList.length > 0) {
      const uniqueMembers = inviteList.filter(
        (member, index, self) => index === self.findIndex((m) => m.userId === member.userId)
      );

      if (uniqueMembers.length !== inviteList.length) {
        setInviteList(uniqueMembers);
      }
    }
  }, [isLoading]);

  const onClickDeleteInvitation = (id: number) => {
    const deleteMember = async (id: number) => {
      try {
        const response = await axios.delete(`/api/dashboards/${dashboardId}/invitations/${invitationId}`);
        if (response.status === 204) {
          toast.success(`멤보 초대를 취소합니다.`);
          // setInvitateList(members.members.filter((member) => member.userId !== id));
        } else {
          toast.error("삭제하는 중 오류가 발생했습니다.");
        }
      } catch (err) {
        console.error(`Error deleting member: ${id}`, err);
        toast.error("삭제하는 중 오류가 발생했습니다.");
      }
    };
    deleteMember(id);
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-6 md:px-7 md:py-[26px]">
        <h2 className="col-start-1 text-2xl font-bold md:text-3xl">초대 내역</h2>
        <div className="flex items-center gap-3 md:gap-4">
          <div>
            {totalPage} 중 {page}
          </div>
          <PaginationBtn
            disabledNext={isFirst && totalPage > size}
            disabledPrev={isLast && totalPage > size}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
          />
          <button
            className="flex items-center gap-[10px] rounded bg-violet01 px-3 py-2 text-xs text-white"
            type="button"
            onClick={() => setIsInvitationDashboardOpen(true)}
          >
            초대하기 <CiSquarePlus strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="px-5 md:px-7">
        {isLoading ? <div>초대 내역을 불러오고 있어요</div> : <></>}
        {error ? <div>초대 내역을 불러오는데 실패했습니다</div> : <></>}
        {inviteList.length === 0 ? <div>아직 초대된 멤버가 없습니다</div> : <></>}
      </div>

      <ul>
        <li>
          {inviteList.map((item) => (
            <InviteItem key={item.id} item={item} />
          ))}
        </li>
      </ul>
    </>
  );
};
export default InviteList;
