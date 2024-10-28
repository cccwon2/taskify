import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import InviteItem from "@/app/mydashboard/components/InviteItem";
import { useCallback, useEffect, useRef, useState } from "react";
import { IInvitation } from "@/types/myDashboardType";
import { cls } from "@/lib/utils";

const InviteList = () => {
  const [invitationList, setInvitationList] = useState<IInvitation["invitations"]>([]);
  const [size, setSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const observeRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  const getInvitationList = useCallback(async () => {
    if (!hasMore) return;

    try {
      const response = await axios.get(`/api/invitations?size=${size}`);

      if (response.status === 200) {
        const newInviteList: IInvitation["invitations"] = response.data;

        setInvitationList((prev) => {
          const existingId = new Set(prev.map((item) => item.dashboard.id));
          const filteredNewInviteList = newInviteList.filter((item) => {
            if (item.inviteAccepted || existingId.has(item.dashboard.id)) {
              return false;
            }

            existingId.add(item.dashboard.id);
            return true;
          });

          if (filteredNewInviteList.length === 0 || filteredNewInviteList.length < size) {
            setHasMore(false);
          }

          return [...prev, ...filteredNewInviteList];
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("내 대시보드 초대받은 목록 조회 실패", error);
        toast.error(error.response?.data);
      }
    }
  }, [hasMore, size]);

  useEffect(() => {
    getInvitationList();

    observeRef.current = new IntersectionObserver((entries) => {
      const lastInviteItem = entries[0];

      if (lastInviteItem.isIntersecting && hasMore) {
        getInvitationList();
      }
    });

    const currentLoadingRef = loadingRef.current;

    if (currentLoadingRef) {
      observeRef.current.observe(currentLoadingRef);
    }

    return () => {
      if (currentLoadingRef) {
        observeRef.current?.unobserve(currentLoadingRef);
      }
    };
  }, [hasMore, size, getInvitationList]);

  return (
    <div
      className={cls(
        "flex max-h-[770px] flex-col space-y-[105px] overflow-auto bg-white px-5 pb-20 pt-6 md:max-h-[592px] xl:max-h-[650px] xl:w-[1022px]",
        invitationList.length > 0 ? "space-y-[10px] pb-6" : ""
      )}
    >
      <h2 className="font-bold md:text-3xl">초대받은 대시보드</h2>
      {invitationList.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg">
          <Image
            src="/images/myDashboard/invitation.svg"
            alt="초대"
            width={60}
            height={60}
            className="md:size-[100px]"
          />
          <span className="text-xs text-gray02 md:text-xl">아직 초대받은 대시보드가 없어요</span>
        </div>
      ) : (
        <>
          <InviteItem invitationList={invitationList} setInvitationList={setInvitationList} />
          <div ref={loadingRef} className="h-[1px]" />
        </>
      )}
    </div>
  );
};

export default InviteList;
