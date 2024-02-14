import { useColorBoxContext } from "../contexts/useColorBoxContext"
import { BaseModal } from "./common/BaseModal"

export const ColorBoxSettingsModal = () => {
    const {
        set_cb_setting_AllowHover,
        cb_setting_AllowHover,
        cb_setting_RefreshInterval,
        set_cb_setting_RefreshInterval,
        cb_setting_AnimationTime,
        set_cb_setting_AnimationTime,
        set_cb_setting_ChangeIndividually,
        cb_setting_ChangeIndividually

    } = useColorBoxContext()

    return (
        <BaseModal>
            <div className="flex flex-col w-full gap-4 p-4">
                <div className="flex-row flex gap-2 w-full justify-between">
                    <label htmlFor="cb_setting_AllowHover">Allow Hover</label>
                    <input
                        onChange={() => set_cb_setting_AllowHover(!cb_setting_AllowHover)}
                        type="checkbox"
                        id="cb_setting_AllowHover"
                        checked={cb_setting_AllowHover} />
                </div>

                <div className="flex-row flex gap-2 w-full justify-between">
                    <label htmlFor="cb_setting_RefreshInterval">Refresh Interval</label>
                    <div className="flex-row flex gap-2">
                        <p>{cb_setting_RefreshInterval} ms</p>
                        <input
                            id="cb_setting_RefreshInterval"
                            type="range" min="1" max="5000" onChange={e => set_cb_setting_RefreshInterval(e.target.value)} value={cb_setting_RefreshInterval} />
                    </div>
                </div>

                <div className="flex-row flex gap-2 w-full justify-between">
                    <label htmlFor="cb_setting_AnimationTime">Animation Time    </label>
                    <div className="flex-row flex gap-2">
                        <p>{cb_setting_AnimationTime} ms</p>
                        <input type="range" min="1" max="5000" onChange={e => set_cb_setting_AnimationTime(e.target.value)} value={cb_setting_AnimationTime} />
                    </div>

                </div>

                <div className="flex-row flex gap-2 w-full justify-between">
                    <label htmlFor="cb_setting_ChangeIndividually">Change Individually</label>
                    <input
                        onChange={() => set_cb_setting_ChangeIndividually(!cb_setting_ChangeIndividually)}
                        type="checkbox"
                        id="cb_setting_ChangeIndividually"
                        checked={cb_setting_ChangeIndividually} />
                </div>





            </div>

        </BaseModal>
    )
}