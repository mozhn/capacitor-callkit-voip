import Foundation

@objc public class CallkitVoip: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
