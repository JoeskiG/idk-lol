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
            <label htmlFor="cb_setting_AllowHover">Allow Hover</label>
            <input
                onChange={() => set_cb_setting_AllowHover(!cb_setting_AllowHover)}
                type="checkbox"
                id="cb_setting_AllowHover"
                checked={cb_setting_AllowHover} />

            <input type="range" min="1" max="5000" onChange={e => set_cb_setting_RefreshInterval(e.target.value)} value={cb_setting_RefreshInterval} />
            <p>{cb_setting_RefreshInterval} ms</p>

            <input type="range" min="1" max="5000" onChange={e => set_cb_setting_AnimationTime(e.target.value)} value={cb_setting_AnimationTime} />
            <p>{cb_setting_AnimationTime} ms</p>
            <label htmlFor="cb_setting_ChangeIndividually">Change Individually</label>
            <input
                onChange={() => set_cb_setting_ChangeIndividually(!cb_setting_ChangeIndividually)}
                type="checkbox"
                id="cb_setting_ChangeIndividually"
                checked={cb_setting_ChangeIndividually} />
        </BaseModal>
    )
}